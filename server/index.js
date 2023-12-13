// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
#include <map>
class Node{
    public:
    int data;
    Node* next;
    //constructor
    Node(int data){
        this->data=data;
        this->next=NULL;
    }
    ~Node(){
        int value=this->data;
        //memory free
        if(this->next!=NULL){
            delete next;
            this->next=NULL;
        }
    }
};
void InsertAtHead(Node* &Head,int d){
    Node* temp= new Node(d);
    temp->next=Head;
    Head=temp;
}
void InsertAtTail(Node* &Tail,int d){
    Node* temp=new Node(d);
    Tail->next=temp;
    Tail=temp;
    
}
void print(Node* &Head){
    Node* temp = Head;
    while(temp != NULL){
        cout<< temp->data << endl;
        temp=temp->next;
    }
    cout<<endl;
    
}
void InsertAtPosition(Node* &Tail,Node* &Head , int position,int d){
    //insert at start
    if(position==1){
        InsertAtHead(Head,d);
        return;
    }
    
    Node* temp=Head;
    int cnt =1;
    while(cnt<position-1){
        temp=temp->next;
        cnt++;
    }
    //insert at last position
    if(temp->next==NULL){
        InsertAtTail(Tail,d);
        return;
        
    }
    
    Node* nodetoinsert= new Node(d);
    nodetoinsert->next=temp->next;
    temp->next=nodetoinsert;
    
}
void deletion(int position,Node* &Head){
    if(position==1){
        Node* temp= Head;
        Head = Head->next;
        //memory free
        temp->next=NULL;
        delete temp;
    }
    else{
        //delete any middle node or last node 
        Node* curr = Head;
        Node* prev = NULL;
        
        int cnt =1;
        while(cnt<=position){
            prev=curr;
            curr=curr->next;
            cnt++;
        }
        prev->next=curr->next;
        curr->next=NULL;
        delete curr;
            
    
    }
}

int main() {
    Node* node1=new Node(10);
    //cout<<node1->data<<endl;
    //cout<<node1->next<<endl;
    //head pointed to next node
    Node* Head=node1;
    Node* Tail = node1; 
    print(Head);
    InsertAtHead(Head,12);
    print(Head);
    InsertAtTail(Tail,15);
    InsertAtPosition(Tail,Head,1,5);
    print(Head);
    cout<<"head"<<Head->data<<endl;
    cout<<"tail"<<Tail->data<<endl;
    deletion(2,Head);
     print(Head);
    
    

    return 0;
}